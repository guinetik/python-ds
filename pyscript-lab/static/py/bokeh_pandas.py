#
# Adapted from: https://www.kaggle.com/code/cindyteh/data-visualization-with-bokeh'
#
from pyodide.http import open_url
from js import Bokeh, console, JSON
##
import numpy as np
import pandas as pd
import json
from math import pi
##
from bokeh.embed import json_item
from bokeh.models import ColumnDataSource, BasicTicker, ColorBar, LinearColorMapper
from bokeh.palettes import Viridis256, brewer
from bokeh.plotting import figure
from bokeh.transform import transform, cumsum, jitter, factor_cmap
from bokeh.resources import CDN
from bokeh.plotting import figure
##
url_content = open_url("/python-ds/data/airbnb_listings.csv")
airbnb = pd.read_csv(url_content)
#
# CORRELATION HEATMAP
#
corrmat = airbnb.corr()
corrmat.index.name = 'AllColumns1'
corrmat.columns.name = 'AllColumns2'
# Prepare data.frame in the right format
corrmat = corrmat.stack().rename("value").reset_index()
# I am using 'Viridis256' to map colors with value, change it with 'colors' if you need some specific colors
mapper = LinearColorMapper(palette=Viridis256,
                           low=corrmat.value.min(),
                           high=corrmat.value.max())
# Define a figure and tools
TOOLS = "box_select,pan,wheel_zoom,box_zoom,reset,help,hover"
p = figure(tools=TOOLS,
           tooltips="@value",
           sizing_mode='scale_width',
           plot_height=400,
           title="AirBNB Correlation plot",
           x_range=list(corrmat.AllColumns1.drop_duplicates()),
           y_range=list(corrmat.AllColumns2.drop_duplicates()),
           toolbar_location="right",
           x_axis_location="below")
# Create rectangle for heatmap
p.rect(x="AllColumns1",
       y="AllColumns2",
       width=1,
       height=1,
       source=ColumnDataSource(corrmat),
       line_color=None,
       fill_color=transform('value', mapper))
# Add legend
color_bar = ColorBar(color_mapper=mapper,
                     location=(0, 0),
                     ticker=BasicTicker(desired_num_ticks=10))

p.xaxis.major_label_orientation = "vertical"
# Embedding
p.add_layout(color_bar, 'right')
p_json = json.dumps(json_item(p, "chart"))
Bokeh.embed.embed_item(JSON.parse(p_json))
#
# PIE CHART
#
#Preparing data for pie Chart
room = pd.DataFrame(airbnb.room_type.value_counts())
room.reset_index(inplace=True)
room.rename(columns={'index': 'room_type', 'room_type': 'count'}, inplace=True)
room['angle'] = room['count'] / room['count'].sum() * 2 * pi
room['color'] = brewer['Spectral'][len(room)]
room = room.to_dict('list')
#
# Plot a pie chart
#
source = ColumnDataSource(room)
p = figure(plot_height=400,
           sizing_mode='scale_width',
           title="Pie Chart on Room Types",
           tools=TOOLS,
           tooltips="@room_type: @count",
           x_range=(-0.5, 1.0))
#
p.wedge(x=0,
        y=1,
        radius=0.4,
        start_angle=cumsum('angle', include_zero=True),
        end_angle=cumsum('angle'),
        line_color="white",
        fill_color='color',
        legend_field='room_type',
        source=source)
#
p.axis.axis_label = None
p.axis.visible = False
p.grid.grid_line_color = None
# Embedding
p_json = json.dumps(json_item(p, "chart2"))
Bokeh.embed.embed_item(JSON.parse(p_json))
##
##
data = airbnb[['room_type', 'price']]
cats = list(airbnb.room_type.unique())
source = ColumnDataSource(data)
#Plotting
p = figure(sizing_mode='scale_width',
           plot_height=400,
           tools=TOOLS,
           y_range=cats,
           title="Price")

p.circle(x='price',
         y=jitter('room_type', width=0.3, range=p.y_range),
         source=source,
         alpha=0.3)

p.x_range.start = 0
p.x_range.end = 10100

p.x_range.range_padding = 0
p.ygrid.grid_line_color = None
# Embedding
p_json = json.dumps(json_item(p, "chart3"))
Bokeh.embed.embed_item(JSON.parse(p_json))
####
#
# BAR CHART
#
#Preparing data for bar chart
host = pd.DataFrame(airbnb.host_id.value_counts()[:10])
host.reset_index(inplace=True)
host.rename(columns={'index': 'host_id', 'host_id': 'count'}, inplace=True)
host.host_id = host.host_id.astype(str)
host_id = host['host_id'].to_list()
count = host['count'].to_list()
###
#
#
#Plot a bar chart
source = ColumnDataSource(data=dict(host_id=host_id, count=count))

p = figure(x_range=host_id,
           plot_height=400,
           sizing_mode='scale_width',
           tools=TOOLS,
           tooltips="@host_id: @count",
           title="Top 10 Host")
p.vbar(x='host_id',
       top='count',
       width=0.9,
       source=source,
       line_color='white',
       fill_color=factor_cmap('host_id',
                              palette=brewer['Set3'][len(count)],
                              factors=host_id))

p.xgrid.grid_line_color = None

#Defining y axis range
p.y_range.start = 0
p.y_range.end = 300

#Adding axis label
p.xaxis.axis_label = 'Host ID'
p.yaxis.axis_label = 'Number of Listing'
# Embedding
p_json = json.dumps(json_item(p, "chart4"))
Bokeh.embed.embed_item(JSON.parse(p_json))
#
# LOLLIPOP CHART
#
#Preparing data for lollipop chart
nbh = pd.DataFrame(airbnb.neighbourhood_group.value_counts())
nbh.reset_index(inplace=True)
nbh.rename(columns={
    'index': 'neighbourhood_group',
    'neighbourhood_group': 'count'
},
           inplace=True)
neighbourhood_group = nbh['neighbourhood_group'].to_list()
count = nbh['count'].to_list()
#
#
dot = figure(title="Neighbourhood",
             sizing_mode='scale_width',
             plot_height=400,
             tools=TOOLS,
             y_range=neighbourhood_group,
             x_range=[0, 10000])

dot.segment(
    0,
    neighbourhood_group,
    count,
    neighbourhood_group,
    line_width=2,
    line_color="green",
)
dot.circle(
    count,
    neighbourhood_group,
    size=15,
    fill_color="orange",
    line_color="green",
    line_width=3,
)

#Defining x axis range
dot.x_range.start = 0
dot.x_range.end = 10500
# Embedding
p_json = json.dumps(json_item(dot, "chart5"))
Bokeh.embed.embed_item(JSON.parse(p_json))