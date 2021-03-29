import React, {Fragment, useState} from 'react'
import {Modal, Button} from 'react-bootstrap';
import './AddModal.css';

function AddModal(props) {
    const [aff, setAff]=useState(false);
    const handleShow = () =>{
        setAff(!aff);
    }
    let film ={
        title:'',
        description:'',
        posterUrl:'',
        rate: 1,
    }
    const saveChanges=()=>{
        props.getFilm(film);
        handleShow();
    }
    const handleChangeTitle = (e) => {film.title=e}
    const handleChangeDescription = (e) => film.description=e
    const handleChangeImage = (e) => film.posterUrl=e
    const handleChangeRating = (e) => film.rate=e
    return (    
        <Fragment>
            <div className='addMovieBtn'>
                <button className='btn btn-primary' onClick={handleShow}>Add a movie from here please</button>
            </div>
            <Modal show={aff} onHide={handleShow}>
                <Modal.Header>
                    <h3>Add a movie:</h3>
                </Modal.Header>
                <Modal.Body>
                    {/* -------------- Form inputs ------------- */}
                    <div className="input-group mb-3">
                        <div className='inpt'>
                            <span className="input-group-text" id="inputGroup-sizing-default">Add the title</span>
                            <input type="text" className="form-control" onChange={e=>handleChangeTitle(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Add a title'/>
                        </div>
                        <div className='inpt'>
                            <span className="input-group-text" id="inputGroup-sizing-default">Add Description</span>
                            <input type="text" className="form-control" onChange={e=>handleChangeDescription(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Add a description'/>
                        </div>
                        <div className='inpt'>
                            <span className="input-group-text" id="inputGroup-sizing-default">Add image</span>
                            <input type="text" className="form-control" onChange={e=>handleChangeImage(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Add image'/>
                        </div>
                        <div className='inpt'>
                            <span className="input-group-text" id="inputGroup-sizing-default">Add Rating</span>
                            <input type="text" className="form-control" onChange={e=>handleChangeRating(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Add Rating'/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default AddModal;
