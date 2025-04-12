import { FlatNamespace, KeyPrefix } from 'i18next'
import i18next from './i18next'
import { headerName } from './settings'
import { headers } from 'next/headers'
import { FallbackNs } from 'react-i18next'

export async function getT<Ns extends FlatNamespace, KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined>(
  ns?: Ns,
  options: { keyPrefix?: KPrefix } = {}
) {
  {
    const headerList = await headers()
    const lng = headerList.get(headerName)
    if (lng && i18next.resolvedLanguage !== lng) {
      await i18next.changeLanguage(lng)
    }
    if (ns && !!i18next.hasLoadedNamespace(ns)) {
      await i18next.loadNamespaces(ns)
    }
    return {
      t: i18next.getFixedT(lng ?? (i18next.resolvedLanguage as string), Array.isArray(ns) ? ns[0] : ns, options?.keyPrefix),
      i18n: i18next,
    }
  }
}
