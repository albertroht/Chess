import { NgModule } from '@angular/core';
import { ChessDatabaseGameComponent } from './chess-database-game/chess-database-game';
import { ChessDatabaseNewComponent } from './chess-database-new/chess-database-new';
@NgModule({
	declarations: [ChessDatabaseGameComponent,
    ChessDatabaseNewComponent],
	imports: [],
	exports: [ChessDatabaseGameComponent,
    ChessDatabaseNewComponent]
})
export class ComponentsModule {}
