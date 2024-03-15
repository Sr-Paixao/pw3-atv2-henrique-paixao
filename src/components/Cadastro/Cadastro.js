import { useState } from 'react'
import axios from 'axios'
import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

function Cadastro() {
  const [nome, setNome] = useState('')
  const [rg, setRG] = useState('')
  const [cpf, setCPF] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')
  const [data, setData] = useState('')
  const [numeroResp, setNumeroResp] = useState('')

  function cadastro(event) {
    event.preventDefault()
    let user = JSON.stringify({
      nome: nome,
      rg: rg,
      cpf: cpf,
      email: email,
      numero: numero,
      data: data,
      numeroResp: numeroResp,
    })
    console.log(user)
    axios
      .post('https://reqres.in/api/users', user)
      .then((response) => {
        alert(user.toString())
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={2}
        sx={{
          mt: 8,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0',
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          style={{ color: '#07382E', marginBottom: 4, fontWeight: 'bold' }}
        >
          Cadastro
        </Typography>
        <Box component="form" onSubmit={cadastro} noValidate sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Seu Nome"
            name="name"
            autoComplete="name"
            onChange={(event) => setNome(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="rg"
            label="RG"
            name="rg"
            autoComplete="rg"
            onChange={(event) => setRG(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="cpf"
            label="CPF"
            name="cpf"
            autoComplete="cpf"
            onChange={(event) => setCPF(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="E-Mail"
            id="email"
            autoComplete="email-password"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              component: 'form',
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="smartphone-number"
              label="Numero do Celular"
              id="smartphone-number"
              onChange={(event) => setNumero(event.target.value)}
            />

            <TextField
              InputLabelProps={{ shrink: true }}
              margin="normal"
              required
              fullWidth
              name="data-nascimento"
              label="Data de nascimento"
              id="data-nascimento"
              type="date"
              onChange={(event) => setData(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="telefone-responsavel"
              label="Telefone do Responsavel"
              id="telefone-responsavel"
              onChange={(event) => setNumeroResp(event.target.value)}
            />
          </Box>
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'right' }}></Grid>
          </Grid>

          <Button type="submit" fullWidth variant="contained">
            Cadastrar
          </Button>
        </Box>
      </Paper>
    </ThemeProvider>
  )
}

export default Cadastro
