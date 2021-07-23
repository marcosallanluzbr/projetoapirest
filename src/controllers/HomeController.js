import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Joao',
      sobrenome: 'Pedrao',
      email: 'jaop@gmail.com',
      idade: 124,
      peso: 925,
      altura: 2.73,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
