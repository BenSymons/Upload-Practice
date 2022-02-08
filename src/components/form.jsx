import {useMutation, useQuery, gql} from "@apollo/client"
import {useState, useEffect} from "react"

const Form = () => {
  const [files, setFiles] = useState()

    const UPLOAD = gql`
  mutation UploadImage($images: [Upload]) {
   uploadImage(images: $images)
 }
    `
    const GET_BRANCHES = gql`
    query GetBranches {
    branchPagination {
      items {
        name
        _id
      }
    }
    }
    `
    const [doUpload, {data: uploadData, loading: uploadLoading}] = useMutation(UPLOAD)

    const handleChange = (e) => {
      // doUpload({variables: {images: e.target.files}})
      setFiles(e.target.files)
    }

    useEffect(() => {
      if(files) doUpload({variables: {images: files}})
    }, [files])

    const {data: branchesData, loading: branchesLoading, error} = useQuery(GET_BRANCHES)

    if(branchesLoading) return <p>loading...</p>
    return <>
    <div>
    <p>Upload file</p>
    <input type="file" onChange={handleChange} multiple/>
  </div>
  <div>
    <p>Branches</p>
    {branchesData.branchPagination.items.map(item => {
      return <div style={{border: "solid 1px black"}}>
        <p>{item.name}</p>
        <p>{item._id}</p>
      </div>
    })}
  </div>
    </>
}

export default Form