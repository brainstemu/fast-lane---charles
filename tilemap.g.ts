// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100005080808081208080813080808080808080902020c0a0902020c020202020d080801090d010103020d010f0f0f0f0108080101010103020204010f0f0f0f01080801010e0110101010010f0f0f0f0108080103020410101010010f0f0f0f01080807020202020202020b020202020a1508010f0f0f090202020d10101010010808010f0f0f011010100110101010010808010f0f0f010f0f0f0110101010010808070202020a0f0f0f07020202020a080801051011010f0f0f0105101011010808010f0f0f010f0f0f0110101010010808010f0f0f010f0f0f0110101010010808030202020b0202020b02020202040806080808081408080808080808080808`, img`
2 2 2 2 2 . 2 2 2 . 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . 2 2 2 2 . 2 
2 . . . . . . . . . 2 2 2 2 . 2 
2 . . . . 2 2 2 2 . 2 2 2 2 . 2 
2 . . . . 2 2 2 2 . 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . . 
2 . 2 2 2 . . . . . 2 2 2 2 . 2 
2 . 2 2 2 . 2 2 2 . 2 2 2 2 . 2 
2 . 2 2 2 . 2 2 2 . 2 2 2 2 . 2 
2 . . . . . 2 2 2 . . . . . . 2 
2 . 2 2 2 . 2 2 2 . 2 2 2 2 . 2 
2 . 2 2 2 . 2 2 2 . 2 2 2 2 . 2 
2 . 2 2 2 . 2 2 2 . 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.skillmap.islandTile0,sprites.skillmap.islandTile6,sprites.vehicle.roadIntersection2,sprites.skillmap.islandTile4,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection1,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn2,sprites.dungeon.collectibleRedCrystal,sprites.skillmap.islandTile3,sprites.skillmap.islandTile1,sprites.skillmap.islandTile2,sprites.dungeon.buttonOrange,myTiles.tile3,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
