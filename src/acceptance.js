import React from 'react'
import { FormattedMessage } from 'react-intl'
import { formatMessage, prepare, memoize } from './helpers'

export const ACCEPT = ['1', 'true']


let acceptance = memoize(function ({ accept=ACCEPT, message, msg, 'if': ifCond, unless }={}) {
  msg = formatMessage(msg || message)
     || <FormattedMessage id="form.errors.acceptance" defaultMessage="must be accepted" />

  accept = [].concat(accept).map(String)

  return prepare(ifCond, unless, false, function (value) {
    if (accept.indexOf(value) < 0) {
      return msg
    }
  })
})

export default acceptance