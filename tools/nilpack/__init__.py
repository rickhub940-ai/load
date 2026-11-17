"""nilpack -- key-chained Lua/Luau packer (prototype).

Public surface: ``packer.pack(source, seed=..., target=...) -> (code, stats)``.
"""

from .packer import TARGETS, Stats, pack  # noqa: F401

__all__ = ["pack", "Stats", "TARGETS"]
