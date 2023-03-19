from odoo import models, fields


class StockPickingInherit(models.Model):
    _inherit = 'stock.picking'

    track_order_ids = fields.One2many('stock.move', 'picking_id')

    def get_transfer(self, transfer_id):
        transfers = self.env['stock.picking'].search([('id', '=', transfer_id)])
        for transfer in transfers:
            values = {
                transfer.track_order_ids.location_id.name:
                    transfer.track_order_ids.location_dest_id.name
            }
        print(values)
        return values
