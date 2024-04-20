// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "LavaLakes":
            case "LavaLakes1":return tiles.createTilemap(hex`100010001212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212111311111111111212121212121211111102020202111111121212121211110c070707070d1111111212121212110c0801010109040d021111121212121106090101090101040d111112121211110601090101090101040d1112121211110601090910010901090a1111121212110f05010109090109010a1111121212110206090901010901030e111112121211110f0b05010901030e071111121212121111020f0b0b0b0e02111112121212121211111111111111111112121212121212121212121211111112121202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.hazardLava0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.hazardLava1,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundSouthWest1,myTiles.tile3,myTiles.tile2,myTiles.tile4,myTiles.tile1,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "lava_rock":
            case "tile3":return tile3;
            case "tileDark1":
            case "tile4":return tile4;
            case "tileLight1":
            case "tile2":return tile2;
            case "tileLight0":
            case "tile1":return tile1;
            case "tileDark2":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
