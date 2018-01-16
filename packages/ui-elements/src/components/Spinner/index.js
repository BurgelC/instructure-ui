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
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Container from '@instructure/ui-container/lib/components/Container'

import themeable from '@instructure/ui-themeable'
import CustomPropTypes from '@instructure/ui-utils/lib/react/CustomPropTypes'
import uid from '@instructure/ui-utils/lib/uid'

import styles from './styles.css'
import theme from './theme'

/**
---
category: components
---
**/
@themeable(theme, styles)
export default class Spinner extends Component {
  static propTypes = {
    /**
    * Give the spinner a title to be read by screenreaders
    */
    title: PropTypes.string.isRequired,
    /**
    * Different-sized spinners
    */
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    /**
    * Different color schemes for use with light or dark backgrounds
    */
    variant: PropTypes.oneOf(['default', 'inverse']),
    /**
    * Valid values are `0`, `none`, `auto`, `xxx-small`, `xx-small`, `x-small`,
    * `small`, `medium`, `large`, `x-large`, `xx-large`. Apply these values via
    * familiar CSS-like shorthand. For example: `margin="small auto large"`.
    */
    margin: CustomPropTypes.spacing
  }

  static defaultProps = {
    size: 'medium',
    variant: 'default'
  }

  constructor (props) {
    super()

    this.titleId = `Spinner__${uid()}`
  }

  radius () {
    switch (this.props.size) {
      case 'x-small':
        return '0.5em'
      case 'small':
        return '1em'
      case 'large':
        return '2.25em'
      default:
        return '1.75em'
    }
  }

  render () {
    const classes = {
      [styles.root]: true,
      [styles[this.props.size]]: true,
      [styles[this.props.variant]]: true
    }
    return (
      <Container
        as="div"
        className={classNames(classes)}
        margin={this.props.margin}
      >
        <svg
          className={styles.circle}
          role="img"
          aria-labelledby={this.titleId}
          focusable="false"
        >
          <title id={this.titleId}>{this.props.title}</title>
          <g role="presentation">
            <circle className={styles.circleShadow} cx="50%" cy="50%" r={this.radius()} />
            <circle className={styles.circleTrack} cx="50%" cy="50%" r={this.radius()} />
            <circle className={styles.circleSpin} cx="50%" cy="50%" r={this.radius()} />
          </g>
        </svg>
      </Container>
    )
  }
}
