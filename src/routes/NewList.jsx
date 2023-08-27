import { Link, Form, redirect } from 'react-router-dom';
import Modal from '../components/Modal';
import 'bootstrap/dist/css/bootstrap.css';


function NewList() {
    return (
        <Modal>
            <div className="mb-3">
                <h5 className="modal-title">Create New List</h5>
            </div>
                <Form method='post'>
                    <div className="mb-3">
                        <label htmlFor="name">List Name</label>
                        <input className='form-control' type="text" id="name" name='name' required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="creator">Your Name</label>
                        <input className='form-control' type="text" name='creator' id="creator" required />
                    </div>
                    <p className="mb-3">
                        <Link className="btn btn-secondary  me-3" type="button" to="..">Cancel</Link>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </p>
                </Form>
        </Modal>
    );
}

export default NewList;

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); // {body: '...', author: '...'}
    await fetch('http://localhost:8080/lists', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    return redirect('/'); // redirect to the parent route
  }