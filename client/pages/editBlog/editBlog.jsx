import useEditBlog from '../../hooks/useEditBlog'
import Form from '../../components/form/form'

export default function EditBlog(){
    
    const {formData, handleChange, submitBlog} = useEditBlog()
    console.log(formData)
    return (
        <div>
            <Form
                title="Edit Blog"
                formData = {formData}
                handleChange={handleChange}
                submitBlog={submitBlog}
            />
        </div>
    )
}