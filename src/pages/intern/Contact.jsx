export default function Contact() {
    return (
        <section className='py-4'>
            <div className="container-bet">
                <header className='mb-6'>
                    <h1>Contato</h1>
                </header>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <h2>Atendimento ao Cliente</h2>
                        <p>Para entrar em contato com o nosso atendimento ao cliente, por favor, envie um e-mail para <a href="mailto:contato@bet1000.top">contato@bet1000.top</a> ou entre em contato através do nosso chat ao vivo.</p>
                    </div>
                    <div>
                        <h2>Parcerias</h2>
                        <p>Para entrar em contato com o nosso setor de parcerias, por favor, envie um e-mail para <a href="mailto:parceria@bet1000.top">parceria@bet1000.top</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}