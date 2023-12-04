import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

  container: {
  
    position: "absolute",
    top: "200px",
    left: "600px",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    width: "460px",
    height: "580px",
   
    
    
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
 cancel:{
  position: "absolute",
  left: "460px"

 },

}));