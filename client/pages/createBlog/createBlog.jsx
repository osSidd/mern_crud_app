import useBlogsPost from '../../hooks/useBlogPost'
import Form from '../../components/form/form'

export default function CreateBlog(){
    
    const {formData, handleChange, submitBlog} = useBlogsPost()
    
    return (
        <div>
            <Form
                title="Create Blog"
                formData = {formData}
                handleChange={handleChange}
                submitBlog={submitBlog}
            />
        </div>
    )
}