import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'

export default function Container() {
    const [nameClient, setNameClient] = useState("")
    const [numberContainer, setNumberContainer] = useState("")
    const [type, setType] = useState("")
    const [status, setStatus] = useState("")
    const [category, setCategory] = useState("")

    function handleCreateContainer() {
        const data = {
            client: nameClient,
            numberContainer,
            type,
            status,
            category
        }
        console.log("payload data: ", data)
        axios({
            method: 'POST',
            url: 'http://localhost:4000/container',
            data
        })
    }

    return (
        <>
            <Head>
                <title>Container</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
            </Head>
            <div className="container mt-4">
                <div>
                    <h5>Criar Container</h5>
                </div>
                <div className="row mt-4">
                    <div className="col-sm-6">
                        <input type="text" className="form-control" placeholder="Nome do cliente"
                        maxLength={255}
                        onChange={(e) => setNameClient(e.target.value)}/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <input type="text" className="form-control" placeholder="Número do contêiner"
                        maxLength={11}
                        onChange={(e) => setNumberContainer(e.target.value)}/>
                    </div>
                    <div className="col-sm-6">
                        <input type="number" className="form-control" placeholder="Tipo do contêiner"
                        maxLength={2}
                        onChange={(e) => setType(e.target.value)}/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <input type="text" className="form-control" placeholder="Status do contêiner"
                        maxLength={255}
                        onChange={(e) => setStatus(e.target.value)}/>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" placeholder="Categoria do contêiner"
                        maxLength={255}
                        onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-sm-6">
                        <button type='button' className='btn btn-primary'
                            onClick={() => handleCreateContainer()}>Criar Contêiner</button>
                        <button type='button' className='btn btn-secondary ms-2'>Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
