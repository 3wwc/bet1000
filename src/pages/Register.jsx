import { useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

export default function Register() {
    const [formData, setFormData] = useState({
        cpf: '',
        nome: '',
        nascimento: '',
        email: '',
        emailConfirmacao: '',
        telefone: '',
        login: '',
        senha: '',
        confirmaSenha: '',
        codigoPromocional: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        let maskedValue = value;

        switch (name) {
            case 'cpf':
                maskedValue = maskCpf(value);
                break;
            case 'nascimento':
                maskedValue = maskDataNascimento(value);
                break;
            case 'telefone':
                maskedValue = maskCelular(value);
                break;
            default:
                maskedValue = value;
        }

        setFormData({
            ...formData,
            [name]: maskedValue
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!isOver18(formData.nascimento)) {
            alert('Você deve ter 18 anos ou mais para se registrar.');
            return;
        }
        if (formData.email !== formData.emailConfirmacao) {
            alert('Os e-mails não correspondem.');
            return;
        }
        if (formData.senha !== formData.confirmaSenha) {
            alert('As senhas não correspondem.');
            return;
        }

        const dataToSend = {
            cpf: formData.cpf,
            nome: formData.nome,
            nascimento: formData.nascimento,
            email: formData.email,
            telefone: formData.telefone,
            login: formData.login,
            senha: formData.senha
        };
    
        try {
            const response = await fetch(`${apiUrl}cadastraUsuario.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });
    
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
        }
    };    

    function maskCpf(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    }
    
    function maskDataNascimento(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\/\d{4})\d+?$/, '$1');
    }
    
    function maskCelular(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1');
    }

    function isOver18(dateString) {
        const [day, month, year] = dateString.split('/').map(Number);
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();
        const diffYears = today.getFullYear() - birthDate.getFullYear();
        const diffMonths = today.getMonth() - birthDate.getMonth();
        const diffDays = today.getDate() - birthDate.getDate();
    
        if (diffYears > 18 || (diffYears === 18 && diffMonths >= 0 && diffDays >= 0)) {
            return true;
        }
    
        return false;
    }

    return (
        <section className="py-8">
            <div className="container-bet">
                <div className="mx-auto w-full lg:w-2/3">
                    <header className="mb-3">
                        <h1 className="text-2xl font-bold">Registre-se</h1>
                        <p className="text-zinc-500">Crie sua conta grátis</p>
                    </header>

                    <form onSubmit={handleSubmit}>
                        <div className="py-1 px-3 rounded bg-secondary text-white font-bold">
                            <p>Dados Pessoais</p>
                        </div>
                        <div className="px-2 my-3 grid md:grid-cols-2 gap-3">
                            <div className="w-full md:col-span-2">
                                <label
                                    htmlFor="cpf"
                                    className="mb-1 block font-bold text-xs"
                                >
                                    CPF
                                </label>
                                <input
                                    className="w-full h-11 border rounded px-4 text-sm"
                                    placeholder="000.000.000-00"
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    value={formData.cpf}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="nome"
                                    className="mb-1 block font-bold text-xs"
                                >
                                    Nome Completo
                                </label>
                                <input
                                    className="w-full h-11 border rounded px-4 text-sm"
                                    placeholder="Digite seu nome"
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="nascimento"
                                    className="mb-1 block font-bold text-xs"
                                >
                                    Data de Nascimento
                                </label>
                                <input
                                    className="w-full h-11 border rounded px-4 text-sm"
                                    placeholder="00/00/0000"
                                    type="text"
                                    id="nascimento"
                                    name="nascimento"
                                    value={formData.nascimento}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="py-1 px-3 rounded bg-secondary text-white font-bold">
                            <p>Contato</p>
                        </div>
                        <div className="px-2 my-3 grid md:grid-cols-2 gap-3">
                            <div className="w-full">
                                <label
                                    htmlFor="email"
                                    className="mb-1 block font-bold text-xs"
                                >
                                    E-mail
                                </label>
                                <input
                                    className="w-full h-11 border rounded px-4 text-sm"
                                    placeholder="seuemail@email.com"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="emailConfirmacao"
                                    className="mb-1 block font-bold text-xs"
                                >
                                    E-mail de Confimação
                                </label>
                                <input
                                    className="w-full h-11 border rounded px-4 text-sm"
                                    placeholder="confirmacao@email.com"
                                    type="email"
                                    id="emailConfirmacao"
                                    name="emailConfirmacao"
                                    value={formData.emailConfirmacao}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="telefone"
                                    className="mb-1 block font-bold text-xs"
                                >
                                    Celular
                                </label>
                                <input
                                    className="w-full h-11 border rounded px-4 text-sm"
                                    placeholder="(00) 00000-0000"
                                    type="text"
                                    id="telefone"
                                    name="telefone"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="py-1 px-3 rounded bg-secondary text-white font-bold">
                            <p>Acesso</p>
                        </div>
                        <div className="px-2 my-3 grid md:grid-cols-2 gap-3">
                            <div className="w-full md:col-span-2">
                                <label
                                    htmlFor="login"
                                    className="mb-1 block font-bold text-xs"
                                >
                                    Usuário
                                </label>
                                <input
                                    className="w-full h-11 border rounded px-4 text-sm"
                                    placeholder="Usuário"
                                    type="text"
                                    id="login"
                                    name="login"
                                    value={formData.login}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="senha"
                                    className="mb-1 block font-bold text-xs"
                                >
                                    Senha
                                </label>
                                <input
                                    className="w-full h-11 border rounded px-4 text-sm" 
                                    placeholder="Digite sua senha"
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    value={formData.senha}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="confirmaSenha"
                                    className="mb-1 block font-bold text-xs"
                                >
                                    Confirmar senha
                                </label>
                                <input
                                    className="w-full h-11 border rounded px-4 text-sm"
                                    placeholder="Confirmação de senha"
                                    type="password"
                                    id="confirmaSenha"
                                    name="confirmaSenha"
                                    value={formData.confirmaSenha}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="py-1 px-3 rounded bg-secondary text-white font-bold">
                            <p>Informações Auxiliares</p>
                        </div>
                        <div className="px-2 my-3 grid gap-3">
                            <div className="w-full">
                                <label
                                    htmlFor="codigoPromocional"
                                    className="mb-1 block font-bold text-xs"
                                >
                                    Código promocional
                                </label>
                                <input
                                    className="w-full h-11 border rounded px-4 text-sm"
                                    placeholder="Código promocional"
                                    type="text"
                                    id="codigoPromocional"
                                    name="codigoPromocional"
                                    value={formData.codigoPromocional}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <p>Ao realizar o cadastro afirmo ser maior de 18 anos e estou de acordo com todo o Regulamento e Política de Privacidade.
        </p>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full mt-4 p-4 bg-secondary text-white transition-all duration-300 rounded font-bold">Finalizar Cadastro</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}