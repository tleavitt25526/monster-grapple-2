namespace SpriteKind {
    export const GUI = SpriteKind.create()
    export const Particle = SpriteKind.create()
    export const Statue = SpriteKind.create()
    export const Link = SpriteKind.create()
}


// Controller Section
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (active) {
        case "menu":
            if (declutter.get("cursor").y == 85) {
                declutter.get("cursor").y += -10
            }
            break
        case "options":
            difficulty += 1
            difficulty = Math.constrain(difficulty, 0, 3)
            declutter.get("diff").setImage(difficulty_icons[difficulty])
            break
        case "select":

            break
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (active) {
        case "menu":
            if (declutter.get("cursor").y == 75) {
                declutter.get("cursor").y += 10
            }
            break
        case "options":
            difficulty -= 1
            difficulty = Math.constrain(difficulty, 0, 3)
            declutter.get("diff").setImage(difficulty_icons[difficulty])
            break
        case "select":

            break
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (active) {
        case "menu":
            if (declutter.get("cursor").y == 75) {
                UnloadMenu()
                LoadSelect()
            } else if (declutter.get("cursor").y == 85) {
                UnloadMenu()
                LoadOptions()
            }
            break
        case "options":
            UnloadOptions()
            LoadMenu()
            break
        case "select":
            UnloadSelect()
            ember_active = false
            color.startFadeFromCurrent(color.Black)
            timer.after(2000, function () {
                color.startFadeFromCurrent(color.originalPalette)
                LoadTestLevel()
            })
            break
    }
    if (player_active) {
        Grapple()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (active) {
        case "test":
            ChangePallete(red_list)
            break
    }
})


// Overlap Section
sprites.onOverlap(SpriteKind.Player, SpriteKind.Statue, function (sprite: Sprite, otherSprite: Sprite) {
    if (controller.B.isPressed() && interactDelay == 0) {
        interactDelay = 5
        camLock = !camLock
        playerSprite.setStayInScreen(camLock)
        if (camLock) {
            scene.cameraFollowSprite(otherSprite)
        } else {
            scene.cameraFollowSprite(sprite)
        }
    }

})


// Player Section
function CreatePlayer(spawn: number[]) {
    playerSprite = sprites.create(assets.image`temp_player`, SpriteKind.Player)
    tiles.placeOnTile(playerSprite, tiles.getTileLocation(spawn[0], spawn[1]))
    scene.cameraFollowSprite(playerSprite)
    controller.moveSprite(playerSprite, speed, speed)
    player_active = true
    playerSprite.z = 10
}
function Grapple() {
    if (grappleDelay == 0) {
        grappleDelay = 10
        controller.moveSprite(playerSprite, 0, 0)
        for (let i = 0; i < 10; i++) {
            declutter.load("chainlink", sprites.create(assets.image`chainlink`))
            declutter.get("chainlink").setPosition(playerSprite.x, playerSprite.y)
            declutter.get("chainlink").x += controller.dx() * i * 1.5
            declutter.get("chainlink").y += controller.dy() * i * 1.5
            declutter.get("chainlink").lifespan = 1000
            if (i == 10) declutter.get("chainlink").setKind(SpriteKind.Link)    
            pause(10)
            //declutter.get("chainlink").vx = controller.dx() * i * 10
            //declutter.get("chainlink").vy = controller.dy() * i * 10
        }
    }
    
}


// Load Section
function LoadTestLevel() {
    active = "test"
    scene.setTileMapLevel(assets.tilemap`TestLevel`)
    CreatePlayer([7, 7])
    declutter.load("statue1", sprites.create(assets.image`statue_sprite`, SpriteKind.Statue))
}
function LoadLavaLakes() {
    // A fade in will be needed at some point.
    active = "lava"
    scene.setTileMapLevel(assets.tilemap`LavaLakes`)
    let playerSprite = sprites.create(assets.image`temp_player`)
    tiles.placeOnRandomTile(playerSprite, assets.tile`lava_rock`)
    scene.cameraFollowSprite(playerSprite)
}
function LoadSelect() {
    active = "select"
    declutter.load("one", fancyText.create("Lava Lake", 120, 0, fancyText.defaultArcade))
    declutter.get("one").y -= 20
    declutter.load("two", fancyText.create("Acid Alpine", 120, 0))
    declutter.get("two").y -= 5
}
function LoadMenu() {
    ember_active = true
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
        declutter.get("start").y += 15
        declutter.load("cursor", sprites.create(assets.image`select`, SpriteKind.GUI))
        declutter.get("cursor").setPosition(15, 75)
    })
    timer.after(2100, function () {
        active = "menu"
        declutter.load("options", fancyText.create("options", 120, 0, fancyText.defaultArcade))
        declutter.get("options").y += 25
    })
}
function LoadOptions() {
    active = "options"
    declutter.load("diff", sprites.create(difficulty_icons[difficulty], SpriteKind.GUI))
}


// Unload Section
function UnloadSelect() {
    declutter.offload("one")
    declutter.offload("two")
}
function UnloadMenu() {
    declutter.offload("line")
    declutter.offload("cursor")
    declutter.offload("options")
    declutter.offload("text")
    declutter.offload("start")
}
function UnloadOptions() {
    declutter.offload("diff")
}


// Start Section
let playerSprite: Sprite
let speed = 75
let ember_active = false
let player_active = false
let interactDelay = 0
let grappleDelay = 0
let camLock = false
let active = "default"
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


// Pallete Section
let red_list: string[] = [ // red increments by 30
    "#F00000",
    "#B40000",
    "#8C0000",
    "#640000"
]
let blue_list: string[] = [
    "#",
    "#",

]
function ChangePallete(list: string[]) {
    for (let i = 0; i < 4; i++) {
        color.setColor(11 + i, color.parseColorString(list[i]))
    }
}


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

    if (interactDelay > 0) {
        interactDelay -= 1
    }
    if (grappleDelay > 0) {
        grappleDelay -= 1
        if (grappleDelay == 0) controller.moveSprite(playerSprite, speed, speed)
    }

    if (active == "test") {
        /*
            I have an idea where I only use one statue, and have different spots
            that it moves to throughout the level.
        */
        let statueList = sprites.allOfKind(SpriteKind.Statue)
        for (let i = 0; i < statueList.length; i++) {
            if (statueList[i].y > playerSprite.y) {
                statueList[i].z = 11
            } else {
                statueList[i].z = 9
            }
        }
    }
})
