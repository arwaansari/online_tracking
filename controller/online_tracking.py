from odoo import http
from odoo.http import request


class WebsiteForm(http.Controller):
    @http.route(['/online_tracking'], type='http', auth="user", website=True)
    def online_tracking(self):
        transfers = request.env['stock.picking'].sudo().search([])
        values = {}
        values.update({
            'transfers': transfers,
        })
        return request.render("online_tracking.online_tracking_form",
                              values)
