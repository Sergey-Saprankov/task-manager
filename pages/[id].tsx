import React, { useState } from 'react'

import { Modal } from '@/entities/TodoList/ui/Modal/Modal'
import { getLayout } from '@/layout/BaseLayout/BaseLayout'
import { Button } from '@/shared/ui/Button/Button'

const TodoList = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Delete</Button>
      <Modal callBack={setIsOpen} isOpen={isOpen}>
        delete
      </Modal>
    </div>
  )
}

TodoList.getLayout = getLayout
export default TodoList
