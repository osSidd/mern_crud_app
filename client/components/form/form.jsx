import './form.css'

export default function Form(props){
    
    const {title, formData, handleChange, submitBlog} = props
    
    return (
        <div>
            <form className='blog-form' onSubmit={submitBlog}>
                <h1>
                  {title}  
                </h1>

                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} placeholder="Title" required={true}/>

                
                <label htmlFor="snippet">Snippet:</label>
                <input type="text" name="snippet" id="snippet" value={formData.snippet} onChange={handleChange} placeholder="Snippet" required={true}/>

                <label htmlFor="body">Body:</label>
                <textarea name="body" id="body" value={formData.body} onChange={handleChange} placeholder="Body" required={true}></textarea>
                
                <button className='submit-form-btn' type="submit">Submit</button>
            </form>
        </div>
    )
}