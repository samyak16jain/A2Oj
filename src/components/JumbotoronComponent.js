import React from 'react'

import { Jumbotron } from 'reactstrap';

function Jumbo() {
    return (
        <Jumbotron className='fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-3  col-md-2'>
                        <img
                            src='assets/Codinglogo.png'
                            height='83'
                            width='83'
                            alt='codebrooms'
                        />
                    </div>
                    <div className='col-9 col-md-6 align-self-center' height='83'>
                        <h1 className=''>CodeBrooms</h1>
                    </div>
                    <div className='col-12'>
                        <p className='ml-3 d-none d-sm-block'>
                            A place to brush up your competetive programming skills...
                            happy coding.
								</p>
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}

export default Jumbo;