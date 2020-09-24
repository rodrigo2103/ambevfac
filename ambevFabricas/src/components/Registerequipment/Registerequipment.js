import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from 'react-bootstrap/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [name, setName] = React.useState('');
  const [type, setType] = React.useState('');
  const [brand, setBrand] = React.useState('');
  

  const handleChange = (event) => {
    setAge(event.target.value);
    setName(event.target.value);
    setType(event.target.value);
    setBrand(event.target.value);
  };

  return (
    <div>
      <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand">Register Equipment</a>

      </nav>
    <div>
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={name}
          onChange={handleChange}
          label="Name"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} >AERADOR DE MOSTO</MenuItem>
          
        </Select>
      </FormControl>
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={type}
          onChange={handleChange}
          label="Type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} >Compressor de ar</MenuItem>
          
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={brand}
          onChange={handleChange}
          label="brand"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} >Unknown</MenuItem>
          
        </Select>
      </FormControl>

      
    </div>
    <Button type="submit" >
        <span>Registrar Equipamento</span>
      </Button>
      <br />
      <br />
      <Button type="submit" >
        <span>Editar</span>
      </Button>
      <br />
      <br />
      <Button type="submit" >
        <span>Deletar</span>
      </Button>
    </div>
  );
}
