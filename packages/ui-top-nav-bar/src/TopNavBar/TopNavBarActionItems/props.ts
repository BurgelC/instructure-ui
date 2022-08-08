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

import React from 'react'
import PropTypes from 'prop-types'

import type { WithStyleProps, ComponentStyle } from '@instructure/emotion'
import type {
  TopNavBarActionItemsTheme,
  OtherHTMLAttributes,
  PropValidators
} from '@instructure/shared-types'

import { TopNavBarActionItems } from './index'
import type { TopNavBarContextType } from '../TopNavBarContext'

type ActionItemsChild = React.ComponentElement<
  TopNavBarActionItemsProps,
  TopNavBarActionItems
>

type TopNavBarActionItemsOwnProps = {
  /**
   * FIXME: description of the children prop goes here
   */
  children?: React.ReactNode

  /**
   * A function that returns a reference to root HTML element
   */
  elementRef?: (el: Element | null) => void
}

type PropKeys = keyof TopNavBarActionItemsOwnProps

type AllowedPropKeys = Readonly<Array<PropKeys>>

type TopNavBarActionItemsProps = TopNavBarActionItemsOwnProps &
  WithStyleProps<TopNavBarActionItemsTheme, TopNavBarActionItemsStyle> &
  OtherHTMLAttributes<TopNavBarActionItemsOwnProps>

type TopNavBarActionItemsStyle = ComponentStyle<'topNavBarActionItems'>

type TopNavBarActionItemsState = {
  // state comes here
}

type TopNavBarActionItemsStyleProps = {
  layout: TopNavBarContextType['layout']
}

const propTypes: PropValidators<PropKeys> = {
  children: PropTypes.node,
  elementRef: PropTypes.func
}

const allowedProps: AllowedPropKeys = ['children', 'elementRef']

export type {
  ActionItemsChild,
  TopNavBarActionItemsProps,
  TopNavBarActionItemsStyle,
  TopNavBarActionItemsState,
  TopNavBarActionItemsStyleProps
}
export { propTypes, allowedProps }