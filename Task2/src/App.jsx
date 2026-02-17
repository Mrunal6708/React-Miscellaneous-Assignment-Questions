import { useState } from 'react'
import Modal from './modal.js';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>React Portal Modal Example</h1>

      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>This is the modal content!</p>
      </Modal>
    </div>
  )
}
export default App;
