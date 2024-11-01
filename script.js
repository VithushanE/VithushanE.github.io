function toggleDescription(tile) {
    const description = tile.querySelector('.description');
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}
