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

/** @jsx jsx */
import React, { Component } from 'react'
import { TopNavBarBreadcrumbProps, TopNavBarBreadcrumbState } from './props'
import TopNavBar from '../index'
import { withDeterministicId } from '@instructure/ui-react-utils'
import { withStyle, jsx } from '@instructure/emotion'
import generateStyle from '../TopNavBarBreadcrumb/styles'
import generateComponentTheme from '../TopNavBarBreadcrumb/theme'
import { testable } from '@instructure/ui-testable'
import { IconHamburgerLine } from '@instructure/ui-icons'
import TopNavBarContext from '../TopNavBarContext'

@withDeterministicId()
@withStyle(generateStyle, generateComponentTheme)
@testable()
class TopNavBarBreadcrumb extends Component<
  TopNavBarBreadcrumbProps,
  TopNavBarBreadcrumbState
> {
  // static propTypes = propTypes
  // static allowedProps = allowedProps
  static defaultProps = {}

  declare context: React.ContextType<typeof TopNavBarContext>
  static contextType = TopNavBarContext

  ref: HTMLDivElement | null = null

  componentDidMount() {
    this.props.makeStyles?.({ inverseColor: this.context.inverseColor })
  }

  componentDidUpdate() {
    this.props.makeStyles?.({ inverseColor: this.context.inverseColor })
  }

  renderMenu() {
    const { onClick } = this.props
    return (
      <TopNavBar.Item
        id="iconItem"
        variant="icon"
        renderIcon={<IconHamburgerLine />}
        onClick={onClick}
      >
        Icon variant
      </TopNavBar.Item>
    )
  }

  render() {
    const { children, styles } = this.props
    return (
      <div css={styles?.topNavBarBreadcrumb}>
        <div css={styles?.iconContainer}>{this.renderMenu()}</div>
        <div css={styles?.breadcrumbContainer}>{children}</div>
      </div>
    )
  }
}

export { TopNavBarBreadcrumb }

export default TopNavBarBreadcrumb
