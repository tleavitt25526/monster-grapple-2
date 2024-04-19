namespace SpriteKind {
    export const GUI = SpriteKind.create()
    export const Particle = SpriteKind.create()
    export const Cursor = SpriteKind.create()
}


// Controller Section
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu_active) {
        if (declutter.get("cursor").y == 85) {
            declutter.get("cursor").y += -10
        }
    } else if (options_active) {
        difficulty += 1
        difficulty = Math.constrain(difficulty, 0, 3)
        declutter.get("diff").setImage(difficulty_icons[difficulty])
    } else if (select_active) {

    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu_active) {
        if (declutter.get("cursor").y == 75) {
            declutter.get("cursor").y += 10
        }
    } else if (options_active) {
        difficulty -= 1
        difficulty = Math.constrain(difficulty, 0, 3)
        declutter.get("diff").setImage(difficulty_icons[difficulty])
    } else if (select_active) {
        // for now Lava Lake is chosen by default
        
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu_active) {
        if (declutter.get("cursor").y == 75) {
            UnloadMenu()
            LoadSelect()
        } else if (declutter.get("cursor").y == 85) {
            UnloadMenu()
            LoadOptions()
        }
    } else if (options_active) {
        UnloadOptions()
        LoadMenu()
    }
})


// Load Section
function LoadSelect() {
    select_active = true
    declutter.load("one", fancyText.create("Lava Lake", 120, 0, fancyText.defaultArcade))
    declutter.get("one").y -= 20
    declutter.load("two", fancyText.create("Acid Alpine", 120, 0))
    declutter.get("two").y -= 5
}
function LoadMenu() {
    declutter.load("text", fancyText.create("Monster Grapple", 120, 0, fancyText.serif_small))
    fancyText.animateAtSpeed(declutter.get("text"), fancyText.TextSpeed.Normal, fancyText.AnimationPlayMode.InBackground)
    ember_active = true
    timer.after(1500, function () {
        declutter.load("line", sprites.create(img`
            b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
            `, SpriteKind.GUI))
        declutter.get("line").x += -10
        declutter.get("line").z = -1
    })
    timer.after(2000, function () {
        declutter.load("start", fancyText.create("start", 120, 0, fancyText.defaultArcade))
        declutter.get("start").y += 15
        declutter.load("cursor", sprites.create(assets.image`select`, SpriteKind.GUI))
        declutter.get("cursor").setPosition(15, 75)
    })
    timer.after(2100, function () {
        menu_active = true
        declutter.load("options", fancyText.create("options", 120, 0, fancyText.defaultArcade))
        declutter.get("options").y += 25
    })
}
function LoadOptions() {
    options_active = true
    declutter.load("diff", sprites.create(difficulty_icons[difficulty], SpriteKind.GUI))
}


// Unload Section
function UnloadSelect() {
    select_active = false
}
function UnloadMenu() {
    menu_active = false
    declutter.offload("line")
    declutter.offload("cursor")
    declutter.offload("options")
    declutter.offload("text")
    declutter.offload("start")
}
function UnloadOptions() {
    options_active = false
    declutter.offload("diff")
}


// Start Section
let ember_active = false
let select_active = false
let options_active = false
let menu_active = false
let difficulty = 0
let level = 0
let difficulty_icons: Image[] = []
difficulty_icons = [
    assets.image`easy_icon`,
    assets.image`normal_icon`,
    assets.image`hard_icon`,
    assets.image`impossible_icon`
]
stats.turnStats(true)
LoadMenu()


// Update Section
game.onUpdateInterval(100, function () {
    if (ember_active) {
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
