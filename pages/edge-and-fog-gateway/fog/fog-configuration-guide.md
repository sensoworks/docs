# Fog configuration guide

```json
{
  "southbound": {
    "initializers": [],
    "readers": ["excel", "mqtt", "kafka_", "raw_"],
    "writers": ["raw"],
    "validators": [],
    "converters": [
      "standard_json_loader",
      "json2json",
      "csv2json",
      "binary2json_"
    ]
  },
  "core": {
    "initializers": [],
    "validators": [],
    "aggregators": ["standard"],
    "elaborators": ["fft_", "pytorch_"],
    "alarms_chechers": []
  },
  "northbound": {
    "initializers": [],
    "validators": [],
    "writers": ["csv", "json", "stdout"],
    "senders": ["http", "mqtt_", "kafka_"]
  }
}
```

Each class is configured by an header and a parameter section:

```json
{
  "header": {
    "id": "src.core.aggregators.standard_aggregator",
    "module_path": "src.core.aggregators.standard_aggregator",
    "class": "StandardAggregator",
    "description": "Compute the average, min and max of the incoming values over a given period of time",
    "input": "src.southbound.converters.json_2_json_converter",
    "mandatory_tbf": true,
    "enabled": true
  },
  "parameters": {
    "aggregation_period": "5",
    "aggregation_samples": "-1",
    "round": 2
  }
}
```

Each class implements the following methods:

```python
class ClassName():
    def __init__(self, instance_id, config):
    def start(self):
    def stop(self):
    def execute(self, *args):  # Each class may have used the *args form or have specified each parameter
```

Documentation for each class:

| Class file                               | col2 | col3                                     |
| ---------------------------------------- | ---- | ---------------------------------------- |
| src.southbound.readers.excel_reader      |
| src.core.aggregators.standard_aggregator | a    | a g g hjhjhh h jhj h hj jjhjhjhhjh jjj j |

- hhh
- jjj
- hhh |
