#
# Adapted from: https://www.kaggle.com/code/mayeesha/network-analysis-for-dummies-stackoverflow-data/notebook
#
from pyodide.http import open_url
from js import Bokeh, JSON
#
import networkx as nx
import pandas as pd
import numpy as np
import json
#
from bokeh.embed import json_item
from bokeh.plotting import from_networkx
from bokeh.plotting import figure
from bokeh.models import EdgesAndLinkedNodes, NodesAndLinkedEdges
from bokeh.models import Circle
from bokeh.transform import linear_cmap
from bokeh.palettes import Blues8, Reds8, Purples8, Oranges8, Viridis8, Spectral8
#
nodes = pd.read_csv(open_url('/python-ds/data/stack_network_nodes.csv'))
edges = pd.read_csv(open_url('/python-ds/data/stack_network_links.csv'))
#
def normalize(values, bounds):
    return [
        bounds['desired']['lower'] + (x - bounds['actual']['lower']) *
        (bounds['desired']['upper'] - bounds['desired']['lower']) /
        (bounds['actual']['upper'] - bounds['actual']['lower']) for x in values
    ]
#
def get_adjusted_node_size(G):
    degrees = nx.degree(G)
    nx.set_node_attributes(G, name='degree', values=dict(degrees))
    #
    centrality = nx.eigenvector_centrality_numpy(G)
    nx.set_node_attributes(G, name='centrality', values=centrality)
    centrality_values = []
    degree_values = []
    for (node) in centrality:
        centrality_values.append(centrality[node])
    max_centrality = max(centrality_values)
    min_centrality = min(centrality_values)
    i = 0
    for (node, degree) in degrees:
        degree_values.append(degree)
        i = i + 1
    max_degree = max(degree_values)
    centrality_values = normalize(
        centrality_values, {
            'actual': {
                'lower': min_centrality,
                'upper': max_centrality * 2
            },
            'desired': {
                'lower': 5,
                'upper': 100
            }
        })
    sizes = {}
    i = 0
    for (node, degree) in degrees:
        sizes[node] = centrality_values[i]
        i = i + 1
    #
    adjusted_node_size = dict([(node, sizes[node])
                               for node, degree in degrees])
    nx.set_node_attributes(G,
                           name='adjusted_node_size',
                           values=adjusted_node_size)
#
HOVER_TOOLTIPS = [
        ("name", "@name"),
        ("Degree", "@degree"),
        ("nodesize", "@nodesize"),
        ("Group", "@group")
]
#
#
G = nx.Graph()
for index, row in nodes.iterrows():
    G.add_node(row["name"],
                           group=row["group"],
                           nodesize=row["nodesize"],
                           name=row['name'])
##
for index, row in edges.iterrows():
    G.add_edge(row["source"], row["target"], weight=row["value"])
##
nodes = G.nodes()
#
#
degrees = dict(nx.degree(G))
nx.set_node_attributes(G, name='degree', values=degrees)
number_to_adjust_by = 10
adjusted_node_size = dict([(node, degree+number_to_adjust_by) for node, degree in nx.degree(G)])
nx.set_node_attributes(G, name='node_size', values=adjusted_node_size) 
##
pos = nx.drawing.spring_layout(G, k=0.70, iterations=60)
network_graph = from_networkx(G, pos)
##
network_graph.selection_policy = NodesAndLinkedEdges()
network_graph.inspection_policy = NodesAndLinkedEdges()
#Set node sizes and colors according to node degree (color as spectrum of color palette)
minimum_value_color = 1
maximum_value_color = 8
network_graph.node_renderer.glyph = Circle(size='node_size', fill_color=linear_cmap('group', Spectral8, minimum_value_color, maximum_value_color))

#nx.draw_networkx(G,pos=pos,node_color=node_color,node_size=node_size,edge_color='#FFDEA2',edge_width=1)
##
plot = figure(sizing_mode="stretch_width",
              tooltips = HOVER_TOOLTIPS,
              tools="pan,wheel_zoom,save,reset",
              active_scroll='wheel_zoom',
              height=400,
              title="Stackoverflow Networks")
##
plot.renderers.append(network_graph)
##
p_json = json.dumps(json_item(plot, "chart"))
Bokeh.embed.embed_item(JSON.parse(p_json))
#########
cliques = list(nx.find_cliques(G))
clique_number = len(list(cliques))
print(f"🐍: This network has {clique_number} cliques!")
#
sorted_cliques = sorted(list(nx.find_cliques(G)),key=len)
max_clique_nodes = set()
#
for nodelist in sorted_cliques[-4:-1]:
    for node in nodelist:
        max_clique_nodes.add(node)
#
max_clique = G.subgraph(max_clique_nodes)
print(f"🐍: Clique Graph:{nx.info(max_clique)}")
##
degrees = dict(nx.degree(max_clique))
nx.set_node_attributes(max_clique, name='degree', values=degrees)
number_to_adjust_by = 15
adjusted_node_size = dict([(node, degree+number_to_adjust_by) for node, degree in nx.degree(max_clique)])
nx.set_node_attributes(max_clique, name='node_size', values=adjusted_node_size) 
##
pos = nx.drawing.spring_layout(max_clique, k=0.70, iterations=60)
graph=from_networkx(max_clique,pos)
graph.node_renderer.glyph = Circle(size='node_size', fill_color=linear_cmap('group', Spectral8, minimum_value_color, maximum_value_color))
plot = figure(sizing_mode="stretch_width",
              tooltips = HOVER_TOOLTIPS,
              tools="pan,wheel_zoom,save,reset",
              active_scroll='wheel_zoom',
              height=400,
              title="Stackoverflow Cliques")
#
plot.renderers.append(graph)
##
p_json = json.dumps(json_item(plot, "chart2"))
Bokeh.embed.embed_item(JSON.parse(p_json))
##
major_languages = ['c','c++','c#','java','python','ruby','scala','haskell','javascript','sql']
p_language_nodes = []
for language in major_languages:
    neighbors = G.neighbors(language)
    p_language_nodes.extend(neighbors)
programming_language_graph = G.subgraph(set(p_language_nodes))
##
degrees = dict(nx.degree(programming_language_graph))
nx.set_node_attributes(programming_language_graph, name='degree', values=degrees)
number_to_adjust_by = 5
adjusted_node_size = dict([(node, degree*number_to_adjust_by) for node, degree in nx.degree(programming_language_graph)])
nx.set_node_attributes(programming_language_graph, name='node_size', values=adjusted_node_size) 
##
pos=nx.random_layout(programming_language_graph)
graph=from_networkx(programming_language_graph,pos)
graph.node_renderer.glyph = Circle(size='node_size', fill_color=linear_cmap('group', Spectral8, minimum_value_color, maximum_value_color))
plot = figure(sizing_mode="stretch_width",
              tooltips = HOVER_TOOLTIPS,
              tools="pan,wheel_zoom,save,reset",
              active_scroll='wheel_zoom',
              height=400,
              title="Stackoverflow Languages Network")
#
plot.renderers.append(graph)
##
p_json = json.dumps(json_item(plot, "chart3"))
Bokeh.embed.embed_item(JSON.parse(p_json))
##