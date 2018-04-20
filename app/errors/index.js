'use strict'

module.exports = {
    resourceNotFound: () => {
        const error = new Error('Resource not found.')
        error.code = 404
        return error
    },
    unexpectedError: () => {
        const error = new Error('Unexpected error. Please try again. If this issue continues, please report it as an ' +
            'issue.')
        error.code = 500
        return error
    }
}
