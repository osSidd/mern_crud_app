import {Link} from 'react-router-dom'

export default function ErrorPage(){
    return (
        <div style={{textAlign:'center', marginTop: '2rem'}}>
            <div>
                Requested resource not found
            </div>
            <div>
                Go to <Link to="/">Home</Link>
            </div>
        </div>
    )
}