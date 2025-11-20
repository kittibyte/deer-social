import {View} from 'react-native'
import {Trans} from '@lingui/macro'

import {useEnableSquareButtons} from '#/state/preferences/enable-square-buttons'
import {Logo} from '#/view/icons/Logo'
import {atoms as a, useTheme} from '#/alf'
import {Text} from '#/components/Typography'

export function Badge() {
  const t = useTheme()
  const enableSquareButtons = useEnableSquareButtons()
  return (
    <View style={[a.align_start]}>
      <View
        style={[
          a.pl_md,
          a.pr_lg,
          a.py_sm,
          enableSquareButtons ? a.rounded_sm : a.rounded_full,
          a.flex_row,
          a.align_center,
          a.gap_xs,
          {
            backgroundColor: t.palette.primary_25,
          },
        ]}>
        <Logo fill={t.palette.primary_600} width={14} />
        <Text
          style={[
            a.font_semi_bold,
            {
              color: t.palette.primary_600,
            },
          ]}>
          <Trans>Announcement</Trans>
        </Text>
      </View>
    </View>
  )
}
