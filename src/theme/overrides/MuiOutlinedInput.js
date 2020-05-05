import palette from '../palette';

export default {
  root: {
    '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
      borderColor: palette.primary.main
    },
    '&$focused $notchedOutline': {
      borderColor: palette.primary.main
    },
    '&$disabled $notchedOutline': {
      borderColor: palette.lrgrey['A200']
    },
    borderRadius: '4px'
  },
  notchedOutline: {
    borderColor: palette.secondary.light,
    borderWidth: '1px'
  },
  input: {
    padding: '14.5px 14px'
  }
};
