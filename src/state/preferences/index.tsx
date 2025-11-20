import type React from 'react'

import {Provider as AltTextRequiredProvider} from './alt-text-required'
import {Provider as AutoplayProvider} from './autoplay'
import {Provider as ConstellationProvider} from './constellation-enabled'
import {Provider as ConstellationInstanceProvider} from './constellation-instance'
import {Provider as DeerVerificationProvider} from './deer-verification'
import {Provider as DirectFetchRecordsProvider} from './direct-fetch-records'
import {Provider as DisableHapticsProvider} from './disable-haptics'
import {Provider as DisableLikesMetricsProvider} from './disable-likes-metrics'
import {Provider as DisableQuotesMetricsProvider} from './disable-quotes-metrics'
import {Provider as DisableReplyMetricsProvider} from './disable-reply-metrics'
import {Provider as DisableRepostsMetricsProvider} from './disable-reposts-metrics'
import {Provider as DisableSavesMetricsProvider} from './disable-saves-metrics'
import {Provider as DisableViaRepostNotificationProvider} from './disable-via-repost-notification'
import {Provider as EnableSquareAvatarsProvider} from './enable-square-avatars'
import {Provider as EnableSquareButtonsProvider} from './enable-square-buttons'
import {Provider as ExternalEmbedsProvider} from './external-embeds-prefs'
import {Provider as GoLinksProvider} from './go-links-enabled'
import {Provider as HiddenPostsProvider} from './hidden-posts'
import {Provider as HideFeedsPromoTabProvider} from './hide-feeds-promo-tab'
import {Provider as HideSimilarAccountsRecommProvider} from './hide-similar-accounts-recommendations'
import {Provider as HighQualityImagesProvider} from './high-quality-images'
import {Provider as InAppBrowserProvider} from './in-app-browser'
import {Provider as KawaiiProvider} from './kawaii'
import {Provider as LanguagesProvider} from './languages'
import {Provider as LargeAltBadgeProvider} from './large-alt-badge'
import {Provider as NoAppLabelersProvider} from './no-app-labelers'
import {Provider as NoDiscoverProvider} from './no-discover-fallback'
import {Provider as RepostCarouselProvider} from './repost-carousel-enabled'
import {Provider as ShowLinkInHandleProvider} from './show-link-in-handle'
import {Provider as SubtitlesProvider} from './subtitles'
import {Provider as TrendingSettingsProvider} from './trending'
import {Provider as UsedStarterPacksProvider} from './used-starter-packs'

export {
  useRequireAltTextEnabled,
  useSetRequireAltTextEnabled,
} from './alt-text-required'
export {useAutoplayDisabled, useSetAutoplayDisabled} from './autoplay'
export {useHapticsDisabled, useSetHapticsDisabled} from './disable-haptics'
export {
  useExternalEmbedsPrefs,
  useSetExternalEmbedPref,
} from './external-embeds-prefs'
export {useGoLinksEnabled, useSetGoLinksEnabled} from './go-links-enabled'
export * from './hidden-posts'
export {
  useHideFeedsPromoTab,
  useSetHideFeedsPromoTab,
} from './hide-feeds-promo-tab'
export {useLabelDefinitions} from './label-defs'
export {useLanguagePrefs, useLanguagePrefsApi} from './languages'
export {useSetSubtitlesEnabled, useSubtitlesEnabled} from './subtitles'

export function Provider({children}: React.PropsWithChildren<{}>) {
  return (
    <LanguagesProvider>
      <AltTextRequiredProvider>
        <GoLinksProvider>
          <NoAppLabelersProvider>
            <DirectFetchRecordsProvider>
              <ConstellationProvider>
                <ConstellationInstanceProvider>
                  <DeerVerificationProvider>
                    <NoDiscoverProvider>
                      <ShowLinkInHandleProvider>
                        <LargeAltBadgeProvider>
                          <ExternalEmbedsProvider>
                            <HiddenPostsProvider>
                              <HighQualityImagesProvider>
                                <InAppBrowserProvider>
                                  <DisableHapticsProvider>
                                    <AutoplayProvider>
                                      <UsedStarterPacksProvider>
                                        <SubtitlesProvider>
                                          <TrendingSettingsProvider>
                                            <RepostCarouselProvider>
                                              <KawaiiProvider>
                                                <HideFeedsPromoTabProvider>
                                                  <DisableViaRepostNotificationProvider>
                                                    <DisableLikesMetricsProvider>
                                                      <DisableRepostsMetricsProvider>
                                                        <DisableQuotesMetricsProvider>
                                                          <DisableSavesMetricsProvider>
                                                            <DisableReplyMetricsProvider>
                                                              <HideSimilarAccountsRecommProvider>
                                                                <EnableSquareAvatarsProvider>
                                                                  <EnableSquareButtonsProvider>
                                                                    {children}
                                                                  </EnableSquareButtonsProvider>
                                                                </EnableSquareAvatarsProvider>
                                                              </HideSimilarAccountsRecommProvider>
                                                            </DisableReplyMetricsProvider>
                                                          </DisableSavesMetricsProvider>
                                                        </DisableQuotesMetricsProvider>
                                                      </DisableRepostsMetricsProvider>
                                                    </DisableLikesMetricsProvider>
                                                  </DisableViaRepostNotificationProvider>
                                                </HideFeedsPromoTabProvider>
                                              </KawaiiProvider>
                                            </RepostCarouselProvider>
                                          </TrendingSettingsProvider>
                                        </SubtitlesProvider>
                                      </UsedStarterPacksProvider>
                                    </AutoplayProvider>
                                  </DisableHapticsProvider>
                                </InAppBrowserProvider>
                              </HighQualityImagesProvider>
                            </HiddenPostsProvider>
                          </ExternalEmbedsProvider>
                        </LargeAltBadgeProvider>
                      </ShowLinkInHandleProvider>
                    </NoDiscoverProvider>
                  </DeerVerificationProvider>
                </ConstellationInstanceProvider>
              </ConstellationProvider>
            </DirectFetchRecordsProvider>
          </NoAppLabelersProvider>
        </GoLinksProvider>
      </AltTextRequiredProvider>
    </LanguagesProvider>
  )
}
