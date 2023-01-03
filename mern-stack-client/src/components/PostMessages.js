import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/postMessage";
import { Grid, Paper, withStyles, List, ListItem, ListItemText, Typography, Divider, Button } from "@material-ui/core";
import PostMessageForm from "./PostMessageForm";
import { Autorenew, DeleteSweep } from "@material-ui/icons";

const styles = theme => ({
    paper: {
        margin: theme.spacing(9),
        padding: theme.spacing(2),
        margin:"left",
    },
    smMargin: {
        margin: theme.spacing(1),
     
    },
    grid:{
        justifyContent:"center",
        margin: theme.spacing(7),

    },
    actionDiv: {
        textAlign: "center"
    }
})

const PostMessages = ({ classes, ...props }) => {
    //const {classes, ...props} = props
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllPostMessages()
    }, [])//DidMount

    const onDelete = id => {
        const onSuccess = () => {
            alert("Successfully Deleted");
        }
        if (window.confirm('Are you sure to delete this record?'))
            props.deletePostMessage(id,onSuccess)
    }


    return (
     
        <Grid container>
               <table className="table-data">
            <Grid alignItems="center"
  justify="center" item xs={4}>
                <Paper className={classes.paper}>
                    <PostMessageForm {...{ currentId, setCurrentId }} />
                </Paper>
            </Grid>
            <Grid item xs={7}>

                <Paper className={classes.paper}>
                
                    <List>
                    <thead>
                                                        <th>Name</th>
                                                        <th>Department</th>
                                                        <th>DOB</th>
                                                        <th>Phone Number</th>
                                                        <th>Address</th>
                                                        <th></th>
                                                        {/* <th></th> */}
                                                    </thead>
                        {
                            props.postMessageList.map((record, index) => {
                                return (
                                    <Fragment key={index}>
                                       
                                                
                                                    <tr>
                                                    <td>
                                                   {record.Name}
                                                    </td>
                                                {/* </Typography> */}
                                                <td>
                                                    {record.Department}
                                                </td>
                                                <td>
                                                   {record.DOB}
                                                </td>
                                                <td>
                                                {record.PhoneNumber}
                                                </td>
                                                <td>
                                                   {record.Address}
                                                </td>
                                                <td>
                                                <div className={classes.actionDiv}>
                                                    <td>
                                                    <Button variant="contained" color="primary" size="small"
                                                        className={classes.smMargin}
                                                        onClick={() => setCurrentId(record._id)}>
                                                        Edit
                                                    </Button>
                                                    </td>
                                                    <td>
                                                    <Button variant="contained" color="secondary" size="small"
                                                        className={classes.smMargin}
                                                        onClick={() => onDelete(record._id)}>
                                                        Delete
                                                    </Button>
                                                    </td>
                                                </div>
                                                </td>
                                                </tr>
                                      
                                         {/* <Divider component="li" /> */}
                                    </Fragment>
                                )
                            })
                        }
                    </List>
                </Paper>
            </Grid>
            </table>
        </Grid>
    );
}

const mapStateToProps = state => ({
    postMessageList: state.postMessage.list
})

const mapActionToProps = {
    fetchAllPostMessages: actions.fetchAll,
    deletePostMessage: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostMessages));
