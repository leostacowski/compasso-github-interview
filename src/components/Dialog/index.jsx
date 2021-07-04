import { useState, useEffect } from 'react'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core'

const CustomDialog = ({ show, onClose, title, content, actions }) => {
  const [open, setOpen] = useState(show)

  const handleClose = () => {
    setOpen(false)
    if (onClose instanceof Function) onClose()
  }

  useEffect(() => {
    if (typeof show === 'boolean') setOpen(show)
  }, [show])

  return (
    <Dialog open={open} keepMounted onClose={handleClose}>
      {title && <DialogTitle>{title}</DialogTitle>}

      {content && (
        <DialogContent>
          {typeof content === 'string' ? (
            <DialogContentText>{content}</DialogContentText>
          ) : (
            { content }
          )}
        </DialogContent>
      )}

      {actions && <DialogActions></DialogActions>}
    </Dialog>
  )
}

export default CustomDialog
