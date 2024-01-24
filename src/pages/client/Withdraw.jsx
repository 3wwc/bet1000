export default function Withdraw() {
    return (
        <div className="py-8">
            <div className="w-full max-w-5xl px-4 mx-auto">
                <header className='mb-4'>
                    <h1 className='text-2x md:text-4xl text-center font-bold'>Sacar</h1>
                </header>                
                <div className="grid gap-4 w-full max-w-2xl mx-auto">
                    <input type="text" placeholder="Valor" className="px-2 h-12 w-full border border-zinc-300 rounded" />
                    <button className="bg-green-600 text-white px-4 py-2 rounded">Sacar</button>
                </div>
            </div>
        </div>
    )
} 