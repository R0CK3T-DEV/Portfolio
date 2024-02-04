export function HomeTab() {
    return (
        <div className="tab">
            <img className="logo" src="/img/logo_glow_optimized.png" />
            <p className="mb-4 text-center text-2xl">
                <h2>Hi, my name is</h2>
                <h2 className="r0ck3t-dev">Ezequiel Zapata</h2>
            </p>
            <div className="w-3/4 text-center text-lg">
                <h2>I'm a web developer, among other things.</h2>
            </div>
            <div className="text-center">
                <p>You can contact me on these places:</p>
                <div className="flex flex-row justify-center gap-2">
                    <a href="https://twitter.com/R0CK3T_DEV">Twitter</a>
                    {"-"}
                    <a href="https://www.linkedin.com/in/ezequiel-zapata-a1b1b5298/">
                        LinkedIn
                    </a>
                    {"-"}
                    <p>r0ck3t_dev (Discord)</p>
                </div>
            </div>
        </div>
    );
}
