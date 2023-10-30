/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import type { ComponentStyle } from '@instructure/emotion'
import {
  TopNavBarBreadcrumbProps,
  TopNavBarBreadcrumbStyleProps
} from './props'
import { TopNavBarBreadcrumbTheme } from '@instructure/shared-types'

type TopNavBarBreadcrumbStyle = ComponentStyle<any>

const generateStyle = (
  _componentTheme: TopNavBarBreadcrumbTheme,
  _props: TopNavBarBreadcrumbProps,
  _state: TopNavBarBreadcrumbStyleProps
): TopNavBarBreadcrumbStyle => {
  // const isDesktop = state.layout === 'desktop'

  return {
    topNavBarBreadcrumb: {
      label: 'topNavBarBreadcrumb',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      border: 0,
      outline: 0,
      padding: 0,
      margin: 0,
      appearance: 'none',
      textDecoration: 'none'
    },
    iconContainer: {
      label: 'topNavBarBreadcrumb__iconContainer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      label: 'topNavBarBreadcrumb__icon',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    breadCrumbContainer: {
      label: 'topNavBarBreadcrumb__breadCrumbContainer',
      appearance: 'none',
      textDecoration: 'none'
    }
  }
}

export type { TopNavBarBreadcrumbStyle }
export default generateStyle
