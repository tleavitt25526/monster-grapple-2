// Auto-generated code. Do not edit.
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTiles.transparency16":return img`
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
`;
            case "myTiles.tile3":
            case "lava_rock":return img`
5 5 4 2 2 2 b b b b b b 2 4 4 5 
5 4 b b b b c c c b c c b 4 5 5 
b b c c c c c c c c c c c b 4 4 
b c b c c c b c c c c c c c b 4 
b c c c c c c c c b c c c c c b 
b c c c c c c c c c c c c c c b 
b c c c c c c c c c c c c c c b 
b c c c b c c c c c c c b c b b 
b c c c c c c c b c c c c c c b 
b c c c c c c c c c c c c c c b 
d b c c c c c b c c c c c c c b 
d b c c b c c c c c c b c c b d 
4 d b c c c c c c c c c c b b b 
4 d b c c c c c c c c b d b b b 
4 5 b d b b b d b b b b d b 2 2 
4 5 b d b b b d b b b b b 2 4 4 
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

    helpers._registerFactory("song", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

}
// Auto-generated code. Do not edit.

// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "LavaLakes":
            case "LavaLakes1":return tiles.createTilemap(hex`10001000020202020202020202020202020202020202020404020202020202020204020202020202050404020202020e05040202020202090807040202020204090202020202020b04090202020202020202020202020202120d0d0d0d13020202020202020202120e0101010f0a1302020202020202020c0f01010f01010a13070a020202060a0c010f01010f01010a130602020209050c010f0f16010f010f10040202020804150b01010f0f010f0110020202020202020c0f0f01010f0103140202020202020215110b010f0103140d020202020202020202151111111402070902020202020c07020202020202020208040202020202090402020202020202020202`, img`
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
`, [myTiles.transparency16,sprites.dungeon.hazardLava0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.floorDark2,sprites.dungeon.floorDark3,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark5,sprites.dungeon.floorDark0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.hazardLava1,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundSouthWest1,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return myTiles.transparency16;
            case "lava_rock":
            case "tile3":return myTiles.tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
