import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      orderableDocumentListDeskItem({
        type: 'servicetype',
        title: 'Services',
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'sectorType',
        title: 'Sectors',
        S,
        context,
      }),
      ...S.documentTypeListItems().filter(
        (item) => !['servicetype', 'sectorType'].includes(item.getId() ?? ''),
      ),
    ])
