scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    medal = 1
    music.baDing.play()
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.skillmap.islandTile3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.skillmap.islandTile3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (medal == 1) {
        music.baDing.play()
        tiles.setTileAt(location, sprites.skillmap.islandTile4)
        info.changeScoreBy(1)
    } else {
        game.splash("Trophy Locked", "Find Medal to Open")
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    if (info.score() == 3) {
        game.over(true)
    } else {
        game.splash("The Portal is Locked", "Collect all the items to leave")
    }
})
let medal = 0
let baller = sprites.create(img`
    f f f f f f f f f f f f f f f . 
    f f f f f f f f f f f f f f f f 
    f f f f . . e e e e e . . f f f 
    f f f f . . e f e f e . . f f f 
    . f f . . . e e e e e . . f f f 
    . f f . . . e 5 5 5 e . . . f f 
    . . f . 8 8 8 9 9 9 9 8 8 . f . 
    . . . . 8 8 8 9 8 8 8 8 8 . . . 
    . . . . 8 8 8 9 9 9 8 8 8 . . . 
    . . . . e e 8 9 8 8 8 e e . . . 
    . . . . e e 8 9 8 8 8 e e . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . . 1 1 . 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
medal = 0
controller.moveSprite(baller, 100, 100)
scene.cameraFollowSprite(baller)
tiles.placeOnRandomTile(baller, sprites.dungeon.buttonOrange)
info.startCountdown(18)
