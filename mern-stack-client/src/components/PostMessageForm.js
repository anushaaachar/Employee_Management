import React, { useEffect } from "react";
import { TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/postMessage";
import { AssignmentTurnedIn } from "@material-ui/icons";

const initialFieldValues = {
    Name: '',
    Department: '',
    DOB:'',
    PhoneNumber:'',
    Address:'',
}

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            justifyContent:"center",
            alignItems:"center",
            // margin:"auto",
            // minHeight:"100vh",
        },
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      
    },
    postBtn: {
        width: "50%"
    },
    main:{
        margin:"auto"
    }
})

const PostMessageForm = ({ classes, ...props }) => {

    useEffect(() => {
        if (props.currentId != 0){
            setValues({
                ...props.postMessageList.find(x => x._id == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])

    const validate = () => {
        let temp = { ...errors }
        temp.Name = values.Name ? "" : "This field is required."
        temp.Department = values.Department ? "" : "This field is required."
        temp.DOB = values.DOB ? "" : "This field is required."
        temp.PhoneNumber = values.PhoneNumber ? "" : "This field is required."
        temp.Address = values.Address ? "" : "This field is required."
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x == "")
    }

    var {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues,props.setCurrentId)

    const handleSubmit = e => {
        e.preventDefault()
        const onSuccess = () => {
            alert("Submitted successfully");
            resetForm()
        }
        if (validate()) {
            if (props.currentId == 0)
                props.createPostMessage(values, onSuccess)
            else
                props.updatePostMessage(props.currentId, values, onSuccess)
        }
    }

    return (
        <div className="main">
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}>
            <TextField
                name="Name"
                variant="outlined"
                label="Name"
                fullWidth
                value={values.Name}
                onChange={handleInputChange}
                {...(errors.Name && { error: true, helperText: errors.Name })}
            />
            <TextField
                name="Department"
                variant="outlined"
                label="Department"
                fullWidth
                multiline
                rows={1}
                value={values.Department}
                onChange={handleInputChange}
                {...(errors.Department && { error: true, helperText: errors.Department })}
            />
            <TextField
                name="DOB"
                variant="outlined"
                label="DOB"
                fullWidth
                multiline
                rows={1}
                value={values.DOB}
                onChange={handleInputChange}
                {...(errors.DOB && { error: true, helperText: errors.DOB })}
            />
            <TextField
                name="PhoneNumber"
                variant="outlined"
                label="PhoneNumber"
                fullWidth
                multiline
                rows={1}
                value={values.PhoneNumber}
                onChange={handleInputChange}
                {...(errors.PhoneNumber && { error: true, helperText: errors.PhoneNumber })}
            />
            <TextField
                name="Address"
                variant="outlined"
                label="Address"
                fullWidth
                multiline
                rows={1}
                value={values.Address}
                onChange={handleInputChange}
                {...(errors.Address && { error: true, helperText: errors.Address })}
            />
            <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                className={classes.postBtn}
            >Submit</Button>
        </form>
        </div>
    );
}


const mapStateToProps = state => ({
    postMessageList: state.postMessage.list
})

const mapActionToProps = {
    createPostMessage: actions.create,
    updatePostMessage: actions.update
}


export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostMessageForm));