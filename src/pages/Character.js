const Character = () => {
    const view = `
        <div class="Characters-inner">
            <div class="Characters-card">
                <img src="image" alt="character image">
                <h2>Name</h2>
            </div>
            <div class="Characters-card">
                <h3>Episodes:</h3>
                <h3>Status:</h3>
                <h3>Specie:</h3>
                <h3>Gender:</h3>
                <h3>Origin:</h3>
                <h3>Last location:</h3>
            </div>
        </div>
    `;
    return view;
};

export default Character;