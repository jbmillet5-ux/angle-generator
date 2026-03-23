const angles = {
    "Real Estate": "The 'Shadow HOA' Report: Help buyers see the litigation history of a specific block before they sign.",
    "Niche Hobbyists": "The 'Tournament Integrity' Tool: Verify the age and fraud history of competitive gamers.",
    "Online Dating": "The 'Vibe Check' Pro: A safety audit for users meeting people from niche apps like Lex or Feeld.",
    "Gig Economy": "The 'Gear Guard': For people renting out expensive cameras or tools to strangers peer-to-peer."
};

function generateAngle() {
    const brand = document.getElementById('brand').value;
    const market = document.getElementById('market').value;
    const result = document.getElementById('result');
    
    const text = `**For ${brand}:** ${angles[market]}`;
    result.innerText = text;
}
