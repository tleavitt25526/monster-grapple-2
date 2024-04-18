namespace SpriteKind {
    export const GUI = SpriteKind.create()
    export const Particle = SpriteKind.create()
}
function activateMenu () {
    menu_active = true
    declutter.load("text", fancyText.create("Monster Grapple", 120, 0, fancyText.serif_small))
    fancyText.animateAtSpeed(declutter.get("text"), fancyText.TextSpeed.Normal, fancyText.AnimationPlayMode.InBackground)
    timer.after(1500, function () {
        declutter.load("line", sprites.create(img`
            b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
            `, SpriteKind.GUI))
        declutter.get("line").x += -10
        declutter.get("line").z = -1
    })
    timer.after(2000, function () {
        declutter.load("start", fancyText.create("start", 120, 0, fancyText.defaultArcade))
        declutter.get("start").y += 20
    })
}
let menu_active = false
activateMenu()
game.onUpdateInterval(100, function () {
    if (menu_active) {
        if (Math.percentChance(50)) {
            declutter.load("ember", sprites.create(assets.image`ember`, SpriteKind.Particle))
        } else {
            declutter.load("ember", sprites.create(assets.image`ember2`, SpriteKind.Particle))
        }
        declutter.get("ember").setPosition(randint(0, 180), 120)
        declutter.get("ember").setVelocity(0, -50)
        declutter.get("ember").setFlag(SpriteFlag.AutoDestroy, true)
    }
})
