import json
import pyodide

from js import Bokeh, console, JSON
from bokeh.embed import json_item
from bokeh.plotting import figure
from bokeh.resources import CDN
##
print("🐍: Hi from Python. This is a Bokeh chart!")
##
def run():
    # create a new plot with default y, using figure
    p = figure(sizing_mode='stretch_both')

    # add a circle renderer with x and y coordinates, size, color, and alpha
    p.circle([1, 2, 3, 4, 5], [6, 7, 2, 4, 5], size=15, line_color="navy", fill_color="orange", fill_alpha=0.5)
    p_json = json.dumps(json_item(p, "chart"))

    Bokeh.embed.embed_item(JSON.parse(p_json))
##
run()