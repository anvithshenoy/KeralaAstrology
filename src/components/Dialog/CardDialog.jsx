import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction='up'
      ref={ref}
      {...props}
    />
  )
})

const CardDialogSlide = ({ open, handleClose, title, description, image }) => {
  return (
    <Dialog
      fullWidth
      maxWidth='xs'
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby='dialog-title'
      aria-describedby='dialog-description'
    >
      <DialogTitle id='dialog-title'>
        <Typography
          variant='h5'
          fontFamily={'var(--font-title)'}
          fontWeight={600}
        >
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <img
          src={image}
          alt={title}
          width={'100%'}
          height={400}
          style={{ borderRadius: 10, objectFit: 'cover' }}
        />
        <DialogContentText id='dialog-description'>
          {description}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

CardDialogSlide.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default CardDialogSlide