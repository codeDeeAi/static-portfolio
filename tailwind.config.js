module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                "hero-pattern": "url('/images/svg/drawing.svg')",
                "hero-pattern-1": "url('/images/svg/undraw_into_the_night_vumi.svg')",
                "hero-pattern-2": "url('/images/svg/undraw_young_and_happy_hfpe.svg')",
            }),
        },
    },
    variants: {
        extend: {

        },
    },
    plugins: [],
}